import React            from 'react';
import Blockquote       from '../Blockquote'
import TagsAnswer       from '../TagsAnswer'

export default class Uploader extends React.Component {

  constructor(props) {
    super(props);
    //Initial state
    this.state = {
      input_text: '',
      text_submitted: false,
      adjetivos_masculinos: [],
      adjetivos_femeninos: [],
      adjetivos_plurales: [],
      adverbios: [],
      verbos_presente: [],
      verbos_pasado: [],
      verbos_futuro: [],
    };
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    this.handleTextSubmit = this.handleTextSubmit.bind(this);
    this.renderProcessedText = this.renderProcessedText.bind(this);
    this.renderUploadForm = this.renderUploadForm.bind(this);
  }

  componentWillMount() {
    if (window.location.search != '?') window.location.search = '?';
  }

  handleTextareaChange(event) {
    const text = event.target.value;
    this.setState({input_text: text});
  }

  handleTextSubmit() {
    this.setState({text_submitted: true}, ()=> {
      const text_encoded = encodeURIComponent(this.state.input_text);
      const host = '//freeling.webapi.es?text=' + text_encoded;

      const request = new XMLHttpRequest();
      request.onreadystatechange = ()=> {
        if (request.readyState == 4 && request.status == 200) {
          const response = JSON.parse(request.responseText);
          let tokens = [];
          response.sentences.forEach((sentence)=> {
            tokens = tokens.concat(sentence.sentence);
          });
          let tokens_ejercicios = {
            adjetivos_masculinos: [],
            adjetivos_femeninos: [],
            adjetivos_plurales: [],
            adverbios: [],
            verbos_presente: [],
            verbos_pasado: [],
            verbos_futuro: [],
          };
          tokens.forEach((token, index)=> {
            if (token.tag.match(/^A[A-Z0]{2}M.*$/)) tokens_ejercicios.adjetivos_masculinos.push(token.form.toLowerCase());
            if (token.tag.match(/^A[A-Z0]{2}F.*$/)) tokens_ejercicios.adjetivos_femeninos.push(token.form.toLowerCase());
            if (token.tag.match(/^A[A-Z0]{2}P.*$/)) tokens_ejercicios.adjetivos_plurales.push(token.form.toLowerCase());
            if (token.tag.startsWith('R')) tokens_ejercicios.adverbios.push(token.form.toLowerCase());
            if (token.tag.match(/^V[MS][A-Z0]P.*$/)) tokens_ejercicios.verbos_presente.push(token.form.toLowerCase());
            if (token.tag.match(/^V[MS][A-Z0]S.*$/)) tokens_ejercicios.verbos_pasado.push(token.form.toLowerCase());
            if (token.tag.match(/^V[MS][A-Z0]F.*$/)) tokens_ejercicios.verbos_futuro.push(token.form.toLowerCase());
          });
          this.setState(tokens_ejercicios, ()=> {
          });
        }
      }
      request.open('GET', host, true); // true for asynchronous
      request.send(null);
    });
  }

  renderProcessedText() {
    if (!this.state.text_submitted) {
      return (
        <form>
          <h3>Introduce el texto para procesar</h3>
          <textarea className='form-control uploader-textarea' rows='10' onChange={this.handleTextareaChange} />
          <button type='submit' className='btn btn-success btn-default uploader-button' onClick={this.handleTextSubmit}>Procesar texto</button>
        </form>
      );
    }
    else {
      return <Blockquote text={this.state.input_text.split('\n')} title='Texto procesado'/>
    }
  }

  handleTagsChange(source, tags) {
    let data = {}
    data[source] = tags;
    this.setState(data);
  }

  renderOptions() {
    return [
      <option key='0' value='all'>Todos</option>,
      <option key='1'>1</option>,
      <option key='2'>2</option>,
      <option key='3'>3</option>,
      <option key='4'>4</option>,
      <option key='5'>5</option>,
      <option key='6'>6</option>,
      <option key='7'>7</option>,
      <option key='8'>8</option>,
      <option key='9'>9</option>,
      <option key='10'>10</option>
    ];
  }

  renderUploadForm() {
    if (!this.state.text_submitted) return null;
    return (
      <form className='exercise-selector'>
        <div className='form-group'>
         <label className='title-label' htmlFor='title'>Título del texto</label>
         <input type='text' className='form-control' placeholder='Título' />
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Adjetivos Masculinos</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'adjetivos_masculinos')} tags={this.state.adjetivos_masculinos}/>
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Adjetivos Femeninos</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'adjetivos_femeninos')} tags={this.state.adjetivos_femeninos}/>
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Adjetivos Plurales</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'adjetivos_plurales')} tags={this.state.adjetivos_plurales}/>
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Adverbios</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'adverbios')} tags={this.state.adverbios}/>
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Verbos en Presente</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'verbos_presente')} tags={this.state.verbos_presente}/>
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Verbos en Pasado</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'verbos_pasado')} tags={this.state.verbos_pasado}/>
       </div>
       <hr className='section-separator' />
       <div className='form-group'>
          <label className='title-label'>Verbos en Futuro</label>
          <div className='row select-row'>
            <div className='col-xs-12'>
              <label className='select-label'>Cantidad a identificar:</label>
              <select className='form-control select-quantity'>{this.renderOptions()}</select>
            </div>
          </div>
         <TagsAnswer onChange={this.handleTagsChange.bind(this, 'verbos_futuro')} tags={this.state.verbos_futuro}/>
       </div>
       <div className='submit-area'>
         <button className='btn btn-primary upload-button'>Subir texto</button>
       </div>
     </form>
    );
  }

  render() {

    return (
      <div className='row'>
        <div className='col-xs-12'>
          {this.renderProcessedText()}
          {this.renderUploadForm()}
        </div>
      </div>
    );
  }
}
