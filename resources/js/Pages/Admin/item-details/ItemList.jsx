import { Link, router } from '@inertiajs/react';
import { EyeOutlined } from '@ant-design/icons';
import { Input, Pagination, Table } from 'antd';
import React, { useEffect, useState } from 'react'

function ItemList({ adminItems, search, sortBy: initialSortBy, sortOrder: initialSortOrder }) {

  const [searchTerm, setSearchTerm] = useState(search || "");
  const [sortBy, setSortBy] = useState(initialSortBy || 'id');
  const [sortOrder, setSortOrder] = useState(initialSortOrder || 'desc');
  const [currentPage, setCurrentPage] = useState(adminItems?.current_page || 1);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      router.get("/admin/items", { search: searchTerm, sortBy, sortOrder, page:currentPage }, { preserveState: true, replace: true });
    }, 600);
    return () => clearTimeout(delayDebounce);
  }, [searchTerm, sortBy, sortOrder, currentPage]);

  console.log(adminItems, 'data')
  // console.log(sortBy, sortOrder, 'search')

  const columns = [
    {
      title: 'SL',
      dataIndex: 'id',
      sorter: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Category',
      dataIndex: 'categoryName',
    },
    {
      title: 'Sub Category',
      dataIndex: 'subcategoryName',
    },
    {
      title: 'Is Portrait',
      dataIndex: 'is_portrait',
      render: (record) => {
        return record === 0 ? "No" : "Yes"
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Material',
      dataIndex: 'materialsName',
    },
    {
      title: 'Height',
      dataIndex: 'height',
    },
    {
      title: 'Width',
      dataIndex: 'width',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (record) => (
        <div>
          <Link href={`#`}>
            <EyeOutlined />
          </Link>
        </div>
      )
    },
  ]

  const onTableChange = (pagination, filter, sorter) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field);
    setSortOrder(order === 'ascend' ? 'ASC' : 'DESC');
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
};


  return (
    <div>
      <div className='flex justify-between items-center my-2 py-2'>
        <div>
          <Link href='/admin/item/create' className='bg-slate-500 rounded-sm shadow-md text-center text-white p-1 px-2'>
            + Add New
          </Link>
        </div>
        <div>
          <Input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search items..."
          />
        </div>
      </div>
      <div>
        <Table
          columns={columns}
          //  rowKey={(record) => record.login.uuid}
          // onTableChange={onTableChange}
          dataSource={adminItems?.data}
          pagination={false}
          //  loading={loading}
          onChange={onTableChange}
        />
      </div>
      <div className='flex justify-end px-4'>
        <Pagination
          current={adminItems?.current_page}
          total={adminItems?.total}
          pageSize={adminItems?.per_page}
          onChange={handlePageChange}
          showSizeChanger={false}
          style={{ marginTop: 20, textAlign: "center" }}
        />
      </div>
    </div>
  )
}

export default ItemList