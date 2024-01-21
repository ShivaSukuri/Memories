import { CSP_NONCE, Component, ViewChild } from '@angular/core';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  memories:any[]=[];
  imgSource:string="assets/memory.jpg"
  selectedDayMemories: any[] = [];
  memory:any;
  myd:string="";
  title:any;
  description:any;  
  dayName="";
  currentDate: string =new Date().toISOString().split('T')[0];
  constructor(){
    this.memory={title:"",date:"",description:"",day:""};
    const dayOfWeek=["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const currentDate=new Date();
    this.dayName=dayOfWeek[currentDate.getDay()];
    this.myd=localStorage.getItem('myData')+"";
    this.memories=JSON.parse(this.myd);
    this.memories=[{title:"office",date:"20-01-2024",description:"i received best employee award",day:"WED"},
  {title:"Home",date:"21-01-2024",description:"we went to lunch at krithunga restaurent",day:"SUN"},
  {title:"Exerceise",date:"21-01-2024",description:"i played cricket",day:"WED"},
  {title:"Office",date:"22-01-2024",description:"we went to team lunch with our new project manager.he seems cools let's lee",day:"MON"},
  {title:"Traffic",date:"22-01-2024",description:"There is heavy traffic at gachibowli i nearly stayed for 30 min at radisson hotel",day:"MON"},
  {title:"Memory filled with joy",date:"19-01-2024",description:"Today is a beautiful day in my life .I can't even express my words.My brother had a daughter.he is looking very beautiful and healthy like his father",day:"TUE"},
  {title:"Sad day in life",date:"17-1-2024",description:"I met with an accident .i broke my leg",day:"THU"},
  {title:"Office",date:"18-01-2024",description:"Today I went late to office.It should be never repeated again ",day:"FRI"},
  {title:"Grandmother Home",date:"19-01-2024",description:"After long time i came to my grand mother home.It is not even changed a bit.it looks like exactly same It's been a long time since i came to this place. I like the environment and grand mother food.",day:"SAT"}];
  this.selectedDayMemories=this.getMemoriesByDay(this.dayName);
  }
  ngOnInit():void{
   
  }
  addMemory(form:any){
    const newMemory = {
      title: form.title,
      date: form.date,
      description: form.description,
      day:this.dayName
    };
    this.memories.unshift(newMemory);
    localStorage.setItem('myData',JSON.stringify(this.memories));
    this.title="";
    this.description="";
    this.memory = { title: "", date: "", description: "",day:"" };
    this.selectedDayMemories=this.getMemoriesByDay(this.dayName)
  }
  deleteMemory(title:any){
    const idToDelete = title;
    this.memories = this.memories.filter(item => item.title !== title.title);
    localStorage.setItem('myData', JSON.stringify(this.memories));
    this.selectedDayMemories=this.getMemoriesByDay(title.day);
  }
  displayMemories(day: string) {
    this.dayName=day;
    this.selectedDayMemories = this.getMemoriesByDay(day);
  }
  getMemoriesByDay(day: string) :any{
    this.selectedDayMemories=[];
    for(let data of this.memories){
      if(data.day===day){
        this.selectedDayMemories.unshift(data);
      }
    }
    return this.selectedDayMemories;
  }
  getBackgroundColor(day: string): any {
    return {
      'background-color': this.dayName === day ? 'rgb(235, 131, 52)' : 'white',
      'color': this.dayName === day ? 'black' : 'black'
    };
  }
}
