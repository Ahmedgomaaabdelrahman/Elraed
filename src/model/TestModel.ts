export class Test{
  questaion:any
    public TEST={
        'questaion':'','answer_1':'','answer_2':'','answer_3':'','correct':''
      }
addAQuestion(){
  this.questaion.push(this.TEST)
  this.TEST={'questaion':'','answer_1':'','answer_2':'','answer_3':'','correct':''}
}
getAllQuestions(){
  return this.questaion
}
        constructor(){
    
        }
     
        initialaizeQuestions(){
  this.questaion=[]
        }
      }