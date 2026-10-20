import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import StudentCard from '../components/StudentCard';
import student1 from '../assets/character1.png';
import student2 from '../assets/character2.png';
import student3 from '../assets/character3.png';
import student4 from '../assets/character4.png';
import Pagination from '../components/Pagination';

function Students() {
    return (

        <div className="container mt-3">
              <Breadcrumb />
              <PageHeader />

                
              <div className="row g-3 mt-2">

                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Mirai Kuriyama"
                          id={101}
                          major="Literature"
                          year={2}
                          gpa={3.8}
                          image={student1}
                      />
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Akihito Kanbara"
                          id={102}
                          major="Psychology"
                          year={2}
                          gpa={3.7}
                          image={student2}
                      />
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Mitsuki Nase"
                          id={103}
                          major="Business Administration"
                          year={2}
                          gpa={3.9}
                          image={student3}
                      />
                  </div>

                  <div className="col-12 col-sm-6 col-lg-3">
                      <StudentCard
                          name="Hiroomi Nase"
                          id={104}
                          major="Computer Science"
                          year={2}
                          gpa={3.6}
                          image={student4}
                      />
                  </div>

              </div>

              <Pagination />

        </div>

    );
}

export default Students;

