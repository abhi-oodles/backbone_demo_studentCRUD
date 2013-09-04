package org.oodles

class Student {

	String studentId
	String studentName
	String branch
	  
    public Student(String studentId, String studentName, String branch) {
		super();
		this.studentId = studentId;
		this.studentName = studentName;
		this.branch = branch;
	}
	static constraints = {
    }
}
