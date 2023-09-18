
import Sidebar from './Sidebar'

export default function TeacherDashboard() {
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
