
import Sidebar from './Sidebar'

export default function Dashboard() {
  return (
    <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
               <Sidebar/>
            </aside>
            <section className='col-md-9'>
dashboard 
            </section>
        </div>
    </div>
  )
}
