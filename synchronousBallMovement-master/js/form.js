class Form{
    constructor(){
        this.title=createElement('h2')
       this.input = createInput("name")
         this.button = createButton('Play')
       this.greeting=createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
        this.title.hide()
    }
    display(){
        
        this.title.html("What colour is a giraffe's tongue?   A:GREEN, B:BLUE, or C:Purple")
        
        this.title.position(displayWidth/2-50,100)
        
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        
        this.button.position(displayWidth/2+30,displayHeight/2)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("The Answer was...... Blue!")
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }
}