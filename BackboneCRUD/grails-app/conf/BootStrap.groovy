import org.oodles.Student;

class BootStrap {

    def init = { servletContext ->
		new Student('st_001','Abhi Bacheti','CSE').save(flush:true)
		new Student('st_002','Anurag Jangra','ME').save(flush:true)
		new Student('st_003','Lalit Kumar','ECE').save(flush:true)
		new Student('st_004','Anjali Sheel','CSE').save(flush:true)
		new Student('st_005','Gagandeep Kaur','ECE').save(flush:true)
		new Student('st_006','Dev Anand','ECE').save(flush:true)
		
    }
    def destroy = {
    }
}
