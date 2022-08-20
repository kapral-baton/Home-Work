const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];


class User{
	constructor( obj ){
		this.img = obj.img;
		this.name = obj.name;
		this.age = obj.age;
		this.courses = obj.courses;
	}

	markStyle(mark){
		if(mark <= 20) {
			return "satisfactory";
		}else if (mark <= 50 ) {
			return "good";
		}else if (mark <= 75 ) {
			return "very-good";
		}else {
			return "excellent";
		}
	}

	render(){}

	renderCourses(){}
}


class Student extends User{
	constructor(obj){
		super(obj);
	}

	render(){
		return `<div class="user">
            <div class="user__info">
                <div class="user__info--data">
                    <img src="images/users/${this.img}.png" alt="Leo Smith" height="50">
                    <div class="user__naming">
                        <p>Name: <b>${this.name}</b></p>
                        <p>Age: <b>${this.age}</b></p>
                    </div>
                </div>
                <div class="user__info--role student">
                    <img src="images/roles/student.png" alt="lector" height="25">
                    <p>student</p>
                </div>
            </div>
            ${this.renderCourses()}
        </div>`
	}

	renderCourses() {
		if (this.courses !== undefined) {
			return `<div class="user__courses">

                ${this.courses.map(item => `<p class="user__courses--course student">${item.title}<span class="${this.markStyle(item.mark)}">${this.markStyle(item.mark)}</span></p>`).join('')}
            </div>`;
		}else {
			return '';
		}
	}

}


class Lector extends User{
	constructor(obj){
		super(obj);
	}

	render(){
		return `<div class="user">
					<div class="user__info">
						<div class="user__info--data">
							<img src="images/users/LeoSmith.png" alt="Leo Smith" height="50">
							<div class="user__naming">
								<p>Name: <b>${this.name}</b></p>
								<p>Age: <b>${this.age}</b></p>
							</div>
						</div>
						<div class="user__info--role student">
							<img src="images/roles/lector.png" alt="lector" height="25">
							<p>lector</p>
						</div>
					</div>
					${this.renderCourses()}
            	</div>`
	}

	renderCourses(){
		return `<div class="user__courses admin--info">
                ${this.courses.map(item => `<div class="user__courses--course lector">
					<p>Title: <b>${item.title}</b></p>
					<p>Lector's score: <span class="${this.markStyle(item.score)}">${this.markStyle(item.score)}</span></p>
					<p>Average student's score: <span class="${this.markStyle(item.studentsScore)}">${this.markStyle(item.studentsScore)}</span></p>
				</div>`).join('')}
            </div>`
	}
}


class Admin extends User{
	constructor(obj){
		super(obj);
	}

	render() {
		return `<div class="user">
            		<div class="user__info">
               			<div class="user__info--data">
                    		<img src="images/users/EmilySmith.png" alt="Emily Smith" height="50">
                    		<div class="user__naming">
                      			<p>Name: <b>${this.name}</b></p>
                     		 	<p>Age: <b>${this.age}</b></p>
                    		</div>
                		</div>
                	<div class="user__info--role student">
                    	<img src="images/roles/admin.png" alt="admin" height="25">
                    	<p>admin</p>
                	</div>
            	</div>
            	${this.renderCourses()}
			</div>`
	}

	renderCourses(){
		return `<div class="user__courses admin--info">
					${this.courses.map(item => `<div class="user__courses--course admin">
													<p>Title: <b>${item.title}</b></p>
													<p>Admin's score: <span class="${this.markStyle(item.score)}">${this.markStyle(item.score)}</span></p>
													<p>Lector: <b>${item.lector}</b></p>
												</div>`).join('')}
            	</div>`;
	}
}




let usersArr = [];
for (let key in users) {
	switch (users[key].role) {
		case 'student' :
			usersArr.push(new Student(users[key]));
			break;
		case 'lector' :
			usersArr.push(new Lector(users[key]));
			break;
		case 'admin' :
			usersArr.push(new Admin(users[key]));
			break;
	}
}
console.log(usersArr);




document.write(`<div class="users"> ${usersArr.map(element => element.render()).join('')} </div>`)






