class TeamMember {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name
        this.address = address
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time){
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'start a support session')
    }
}

class StudentCare extends TeamMember{
    buildARoutine(student){
        console.log(this.name, 'Build a routine for student', student)
    }
}


class NaptuneApp extends TeamMember{
    codeEditor;
    constructor(name, address, editor){
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name, 'Release app version', version)
    }
}

const amir = new Support('Amir khan', 'US', 12)
const salman = new Support('Solaiman Khan', 'Dubai', 11)
const akshay = new Support('Akshay Kumar', 'Dubai', 4)
const sharuk = new Support('Sharuk Khan', 'Dubai', 9)

const alia = new StudentCare('Alia Bhatt', 'Mumbai')
const ash = new NaptuneApp('Ash', 'Mumbai', 'Android studio')
console.log(ash)
