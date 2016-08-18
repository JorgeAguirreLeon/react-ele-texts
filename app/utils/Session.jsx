const Session = {

  saveActiveText: (text_id)=> {
    localStorage.setItem('active_text', text_id);
  },

  getActiveText: ()=> {
    return localStorage.getItem('active_text');
  }
}

module.exports = Session
