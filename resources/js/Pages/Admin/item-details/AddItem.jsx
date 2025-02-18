import { Link, router, useForm } from '@inertiajs/react'
import { Button, Col, Input, Row, Select, Upload } from 'antd'
import axios from 'axios';
import React, { useState } from 'react'
// import route from 'vendor/tightenco/ziggy/src/js';
const { TextArea } = Input;

function AddItem({ categories, dimensions, authors, materials, media }) {
  const [fileList, setFileList] = useState([]);
  const [image, setImage] = useState(null);
  const { data, setData, post, errors, processing } = useForm({
    name: '',
    image: null,
    price: 0,
    description: '',
    category_id: null,
    is_portrait: "0",
    video: '',
    subcategory_id: null,
    media_id: null,
    material_id: null,
    dimension_id: null,
    author_id: null,
  })

  const onSearch = (value) => {
    console.log('search:', value);
  };

  const filterSubCategories = data.category_id ? categories.find((cat) => cat.id == data.category_id)?.subcategories || [] : []

  const handleChange = ({ fileList }) => {
    const latestFile = fileList.slice(-1)[0];
    setFileList(fileList.slice(-1));
    setData('image',latestFile?.originFileObj || null);
  };

  const customRequest = (options) => {
    setTimeout(() => {
      options.onSuccess("ok");
    }, 1000);
  };

  function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
        if (data[key] !== null) {
            formData.append(key, data[key]);
        }
    });

post("store", {
    data: formData,
    forceFormData: true,
});
}

  return (
    <div>
      <form onSubmit={onSubmit} className='block'>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='mb-4'>
          <Col
            span={6}
          >
            <Input
              type="text"
              // className='border border-gray-700'
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder='Enter Name'
            />
          </Col>
          <Col span={6}>
            <Select
              showSearch
              type="text"
              className='w-full'
              value={data.category_id}
              options={categories?.map((category) => {
                return {
                  value: category.id,
                  label: category.name
                }
              })}
              onChange={(value) => setData('category_id', value)}
              placeholder='Select Category'
            />
          </Col>
          <Col span={6}>
            <Select
              showSearch
              type="text"
              className='w-full'
              value={data.subcategory_id}
              options={filterSubCategories?.map((subcategory) => {
                return {
                  value: subcategory.id,
                  label: subcategory.name
                }
              })}
              onChange={(value) => setData('subcategory_id', value)}
              placeholder='Select sub Category'
            />
          </Col>
          <Col span={6}>
            <Input
              type="text"
              // className='border border-gray-700'
              value={data.price}
              onChange={(e) => setData('price', e.target.value)}
              placeholder='Enter Price'
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='mb-4'>
          <Col
            span={6}
          >
            <Select
              showSearch
              type="text"
              className='w-full'
              value={data.dimension_id}
              options={dimensions?.map((dimension) => {
                return {
                  value: dimension.id,
                  label: dimension.height
                }
              })}
              onChange={(value) => setData('dimension_id', value)}
              placeholder='Select dimension'
            />
          </Col>
          <Col span={6}>
            <Select
              showSearch
              type="text"
              className='w-full'
              value={data.author_id}
              options={authors?.map((athour) => {
                return {
                  value: athour.id,
                  label: athour.name
                }
              })}
              onChange={(value) => setData('author_id', value)}
              placeholder='Select Author'
            />
          </Col>
          <Col span={6}>
          <Select
              showSearch
              type="text"
              className='w-full'
              value={data.media_id}
              options={media?.map((media) => {
                return {
                  value: media.id,
                  label: media.name
                }
              })}
              onChange={(value) => setData('media_id', value)}
              placeholder='Select Media'
            />
          </Col>
          <Col span={6}>
          <Select
              showSearch
              type="text"
              className='w-full'
              value={data.material_id}
              options={materials?.map((material) => {
                return {
                  value: material.id,
                  label: material.name
                }
              })}
              onChange={(value) => setData('material_id', value)}
              placeholder='Select Material'
            />
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
          <Col span={6}>
            <Upload
              className='flex'
              listType="picture-card"
              fileList={fileList}
              onChange={handleChange}
              customRequest={customRequest}
              showUploadList={{ showPreviewIcon: false }}
            >
              <Button icon={``}>+</Button>
            </Upload>
          </Col>
          <Col span={6}>
            <TextArea
              className='border border-gray-700'
              rows={3}
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              placeholder='Enter Description'
            /></Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='my-4'>
          <Col span={24} className='flex justify-end gap-2'>

          <Link href='/admin/items'>
          <button className='bg-red-500 px-6 py-2 text-white rounded-md' >Close</button>
          </Link>
          <button type='submit' className='bg-green-500 px-6 py-2 text-white rounded-md' disabled={processing}>Save</button>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default AddItem