import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lastUpdate = new Date();

  post = [
    {
      title: 'Mon premier Post',  
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia magnam voluptas omnis dolor illo laboriosam aliquam tempore, error libero placeat. Eligendi nam unde qui similique quo consequuntur voluptas perspiciatis! Exercitationem.',  
      loveIts: 0,  
      created_at: new Date()
    },
    {
      title: 'Mon deuxième Post',  
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia magnam voluptas omnis dolor illo laboriosam aliquam tempore, error libero placeat. Eligendi nam unde qui similique quo consequuntur voluptas perspiciatis! Exercitationem.',  
      loveIts: 0,  
      created_at: new Date()
    }, 
    {
      title: 'Mon troisième Post',  
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia magnam voluptas omnis dolor illo laboriosam aliquam tempore, error libero placeat. Eligendi nam unde qui similique quo consequuntur voluptas perspiciatis! Exercitationem.',  
      loveIts: 0,  
      created_at: new Date()
    }
  ] 
  
    
}
