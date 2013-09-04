package org.oodles
import grails.converters.JSON
class StudentController {

	def show = {
		
			log.debug("findAll")
	
			render Student.findAll() as JSON
		
	}
	
	/* update or save */
	def update = {	
		
		
			
			def updatedStudent = Student.findByStudentId(params.studentId)
			
			if(updatedStudent) {
			log.debug("update student with stduentId: ${params.studentId}")
			
			log.debug "update success"
			updatedStudent.properties = params
			render updatedStudent.save() as JSON
			
			}
			
			else{
				log.debug("create new student with stduentId: ${params.studentId}")
				
				log.debug "create success"
				def newStudent=new Student(params)
				render newStudent.save() as JSON
			}		
		}
	
	
	def delete = {
		log.debug("delete student with studentId: ${params.id}")
		
		def deletedStudent = Student.findByStudentId(params.id)
		
		render deletedStudent.delete(flush: true) as JSON
		 
	}

	}
	
	
	
	

	

