// Returns the length of the node (the divs with the series class).
import { itemCount } from "./populate";
import render from "./populate";

const itemsCounter = () => {

  
    if (!document.querySelectorAll('.series')) {
       
        return 0;
     
    }
    if (document.querySelectorAll('.series').length > 30) {
      return 'Error';
    }
    return document.querySelectorAll('.series').length;
  
};
  
  export default itemsCounter;