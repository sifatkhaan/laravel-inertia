import './bootstrap';
import '../css/app.css'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import Layout from './Layouts/Layout';
import AdminLayout from './Layouts/AdminLayout';

createInertiaApp({
  title: title =>title ? `${title} - laravel inertia` : 'laravel inertia',
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    
    page.default.layout = page.default.layout || ((page)=> {
      if(name.startsWith('Admin/')){
        return <AdminLayout>{page}</AdminLayout>
      }
    return <Layout>{page}</Layout>
  });
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)

  },
  progress:{
    color: '#DE3163',
    showSpinner:true
  }
})