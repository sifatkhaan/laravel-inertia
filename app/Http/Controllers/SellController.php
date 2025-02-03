<?php

namespace App\Http\Controllers;

use App\Events\ItemSold;
use App\Models\Item;
use App\Models\ItemStock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SellController extends Controller
{
    public function sellItem(Request $request ){
        $request->validate([
            'item_id' => 'required|exists:items,id',
            'quantity' => 'required|integer|min:1',
            'total_price' => 'required',
        ]);
        // $item = Item::find($request->item_id);
        $itemStock = ItemStock::where('item_id', $request->item_id)->first();
        // dd($item);
        if (!$itemStock || $itemStock->quantity < $request->quantity) {
            return response()->json(['error' => 'Not enough stock!'], 400);
        }

        DB::transaction(function () use ($itemStock, $request) {
            event(new ItemSold($itemStock, $request->quantity));
            $itemStock->decrement('quantity', $request->quantity);
        });

        return response()->json(['error' => 'Not enough stock!'], 400);
    }

    public function show(Item $item)
    {
        $item->load(['category','material','media']);
        return inertia('SellItem', ['item'=> $item]);
    }
}
