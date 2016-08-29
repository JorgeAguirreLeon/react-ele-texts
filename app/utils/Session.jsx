import Data      from './Data.jsx'

const Session = {

  saveActiveText: (text_id)=> {
    localStorage.setItem('active_text', text_id);
  },

  getActiveText: ()=> {
    const item = localStorage.getItem('active_text');
    if (item != null) return item
    //Set a nice default
    Session.saveActiveText(Data.base().id);
    return Data.base().id;
  }
}

module.exports = Session
