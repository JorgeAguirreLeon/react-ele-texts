import Session      from './Session.jsx'

const Data = {

  getTitle: ()=> {
    const text_id = Session.getActiveText();
    return Data.getTextWithId(text_id).title;
  },

  getDifficulty: ()=> {
    const text_id = Session.getActiveText();
    return Data.getTextWithId(text_id).difficulty;
  },

  getText: ()=> {
    const text_id = Session.getActiveText();
    return Data.getTextWithId(text_id).text;
  },

  getTests: ()=> {
    const text_id = Session.getActiveText();
    return Data.getTextWithId(text_id).tests;
  },

  getTextWithId: (text_id)=> {
    for (var index in Data.texts) {
      if (Data.texts[index].id === text_id) return Data.texts[index]
    }
    //Set a nice default
    Session.saveActiveText(Data.texts[0].id);
    return Data.texts[0];
  },


  texts: [
    {
      'id': 'rana_roja',
      'title': 'La rana roja 🐸',
      'difficulty': 'easy',
      'text': [
        'Había una vez una rana roja que saltaba mucho. Un día, la rana colorada iba brincando de charco en charco y tropezó bruscamente con roca afilada. La rana roja se lastimó la patita y fue al médico que estaba junto al arbusto frondoso. El médico le miró la pata y le puso una escayola blanca, tan blanca que brillaba por la noche. Antes de llegar a casa, la rana se encontró a sus mejores amigos que iban a la charca mayor. La charca mayor era la más divertida de todo el estanque de la ciudad; con toboganes coloridos,  zona de olas, zona de columpios acuáticos y muchas cosas más.',
        'La rana miró a sus amigos y miró su escayola brillante y triste se marchó a casa. La mamá de la rana roja cuando la vio le colocó una bolsa de plástico transparente y le dijo: con esto, podrás ir a la charca mayor hoy a jugar con tus amigos. Entonces la rana saltando de alegría corrió hasta donde estaban sus mejores amigos y fue a la charca. Estuvieron todos juntos y nunca se le olvidó ese día tan maravilloso que pasó con sus amigos.',
        'Y colorín colorado este cuento se ha acabado.'
      ],
      'tests': [
        {
          'word_type': 'adjetivos masculinos',
          'request': 'all',
          'answer': ['frondoso', 'coloridos', 'acuáticos', 'maravilloso', 'juntos', 'colorado']
        },
        {
          'word_type': 'adjetivos femeninos',
          'request': 'all',
          'answer': ['roja', 'blanca', 'afilada', 'colorada']
        },
        {
          'word_type': 'adjetivos plurales',
          'request': 'all',
          'answer': ['mejores', 'coloridos', 'acuáticos', 'juntos']
        },
        {
          'word_type': 'adverbios',
          'request': 'all',
          'answer': ['nunca', 'entonces', 'mucho', 'más', 'hoy', 'bruscamente', 'tan']
        },
        {
          'word_type': 'verbos en presente',
          'request': 5,
          'answer': []
        },
        {
          'word_type': 'verbos en pasado',
          'request': 5,
          'answer': ['pasó', 'olvidó', 'tropezó', 'lastimó', 'fue', 'miró', 'puso', 'encontró', 'marchó', 'vio', 'colocó', 'dijo', 'corrió', 'estuvieron', 'ha acabado']
        },
        {
          'word_type': 'verbos en futuro',
          'request': 5,
          'answer': ['podrás']
        }
      ]
    },
    {
      'id': 'rana_verde',
      'title': 'La rana verde 🐸',
      'difficulty': 'medium',
      'text': [
        'Había una vez una rana verde que saltaba mucho. Un día, la rana colorada iba brincando de charco en charco y tropezó bruscamente con roca afilada. La rana verde se lastimó la patita y fue al médico que estaba junto al arbusto frondoso. El médico le miró la pata y le puso una escayola blanca, tan blanca que brillaba por la noche. Antes de llegar a casa, la rana se encontró a sus mejores amigos que iban a la charca mayor. La charca mayor era la más divertida de todo el estanque de la ciudad; con toboganes coloridos,  zona de olas, zona de columpios acuáticos y muchas cosas más.',
        'La rana miró a sus amigos y miró su escayola brillante y triste se marchó a casa. La mamá de la rana verde cuando la vio le colocó una bolsa de plástico transparente y le dijo: con esto, podrás ir a la charca mayor hoy a jugar con tus amigos. Entonces la rana saltando de alegría corrió hasta donde estaban sus mejores amigos y fue a la charca. Estuvieron todos juntos y nunca se le olvidó ese día tan maravilloso que pasó con sus amigos.',
        'Y colorín colorado este cuento se ha acabado.'
      ],
      'tests': [
        {
          'word_type': 'adjetivos masculinos',
          'request': 'all',
          'answer': ['frondoso', 'coloridos', 'acuáticos', 'maravilloso', 'juntos', 'colorado']
        },
        {
          'word_type': 'adjetivos femeninos',
          'request': 'all',
          'answer': ['verde', 'blanca', 'afilada', 'colorada']
        },
        {
          'word_type': 'adjetivos plurales',
          'request': 'all',
          'answer': ['mejores', 'coloridos', 'acuáticos', 'juntos']
        },
        {
          'word_type': 'adverbios',
          'request': 'all',
          'answer': ['nunca', 'entonces', 'mucho', 'más', 'hoy', 'bruscamente', 'tan']
        },
        {
          'word_type': 'verbos en presente',
          'request': 5,
          'answer': []
        },
        {
          'word_type': 'verbos en pasado',
          'request': 5,
          'answer': ['pasó', 'olvidó', 'tropezó', 'lastimó', 'fue', 'miró', 'puso', 'encontró', 'marchó', 'vio', 'colocó', 'dijo', 'corrió', 'estuvieron', 'ha acabado']
        },
        {
          'word_type': 'verbos en futuro',
          'request': 5,
          'answer': ['podrás']
        }
      ]
    }
  ]
}

module.exports = Data
