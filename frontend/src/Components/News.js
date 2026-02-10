import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {
  "articles" = [
    
    {
      "source": { "id": "die-zeit", "name": "Die Zeit" },
      "author": "Johanna Jürgens, Ingo Malcher",
      "title": "Epstein-Akten: Wie die Deutsche Bank in das System Epstein verwickelt war",
      "description": "Jahrelang hat die Bank mit dem Sexualstraftäter Jeffrey Epstein Geschäfte gemacht. Eine interne Untersuchung zeigt nun detailliert die Geldflüsse hinter der Ausbeutung.",
      "url": "https://www.zeit.de/wirtschaft/2026-02/jeffrey-epstein-akten-deutsche-bank-kontodaten",
      "urlToImage": "https://img.zeit.de/politik/2026-02/jeffrey-epstein-files-deutsche-bank-verwicklung-bild/wide__1300x731",
      "publishedAt": "2026-02-04T08:32:55+00:00",
      "content": "Die Grausamkeit lässt sich in einer nüchternen Excel-Tabelle verstecken. In Zahlenkolonnen, Namenslisten, Fußnoten und Spiegelstrichen. Das Unsagbare kommt dann fast harmlos daher. Und es klingt fast… [+1260 chars]"
    },
    {
      "source": { "id": "bild", "name": "Bild" },
      "author": "Judith Görs",
      "title": "BND: Wladimir Putin lügt über die wahren Kosten des Krieges | Politik",
      "description": "Der Ukraine-Krieg verschlingt einen Großteil des russischen Steuergeldes: Nun zeigt eine Analyse des Bundesnachrichtendienstes (BND).",
      "url": "https://www.bild.de/politik/ausland-und-internationales/bnd-wladimir-putin-luegt-ueber-die-wahren-kosten-des-krieges-6982ea58e2529c3c38c298ca",
      "urlToImage": "https://images.bild.de/6982ea58e2529c3c38c298ca/3c72057c7a3b05b9c6b2fb619d2736f0,cc1f8317?w=1280",
      "publishedAt": "2026-02-04T08:32:33Z",
      "content": "TTS-Player überspringenArtikel weiterlesenBerlin Der Ukraine-Krieg verschlingt einen Großteil des russischen Steuergeldes. Nun zeigt eine Analyse des Bundesnachrichtendienstes (BND): Der Kreml legt s… [+2607 chars]"
    },
    {
      "source": { "id": "die-zeit", "name": "Die Zeit" },
      "author": "dpa",
      "title": "Kriminalität: 47-Jährige angezündet: Revision nach Urteil eingelegt",
      "description": "Hier finden Sie Informationen zu dem Thema „Kriminalität“. Lesen Sie jetzt „47-Jährige angezündet: Revision nach Urteil eingelegt“.",
      "url": "https://www.zeit.de/news/2026-02/04/47-jaehrige-angezuendet-revision-nach-urteil-eingelegt",
      "urlToImage": "https://img.zeit.de/news/2026-02/04/47-jaehrige-angezuendet-revision-nach-urteil-eingelegt-image-group/wide__1300x731",
      "publishedAt": "2026-02-04T08:32:28+00:00",
      "content": "Nach dem Prozess gegen einen Mann, der seine Lebensgefährtin angezündet hat, haben Staatsanwaltschaft und Verteidigung Revision eingelegt. Das teilte ein Sprecher des Landgerichts Halle auf Anfrage m… [+1395 chars]"
    },
    {
      "source": { "id": "bild", "name": "Bild" },
      "author": "Dennis Schlüter",
      "title": "Olympia 2026: IOC verbietet deutscher Eisschnellläuferin die Schuhe | Sport",
      "description": "Da wird kein Schuh draus! Das Internationale Olympische Komitee (IOC) untersagt der deutschen Eisschnellläuferin Josephine Schlörb die Nutzung ihrer gewo...",
      "url": "https://www.bild.de/sport/olympia/olympia-2026-ioc-verbietet-deutscher-eisschnelllaeuferin-die-schuhe-6980d74ff0e62064809e2741",
      "urlToImage": "https://images.bild.de/6980d74ff0e62064809e2741/d702e95cc26aa491f536622e496d62e9,983b0e6b?w=1280",
      "publishedAt": "2026-02-04T08:28:18Z",
      "content": "TTS-Player überspringenArtikel weiterlesenDa wird kein Schuh draus!\r\nDas Internationale Olympische Komitee (IOC) untersagt der deutschen Eisschnellläuferin Josephine Schlörb die Nutzung ihrer gewohnt… [+1691 chars]"
    },
    {
      "source": { "id": "die-zeit", "name": "Die Zeit" },
      "author": "dpa",
      "title": "Kriminalität: Getöteter Polizist - Ermittler gehen gegen Hasspostings vor",
      "description": "Hier finden Sie Informationen zu dem Thema „Kriminalität“. Lesen Sie jetzt „Getöteter Polizist - Ermittler gehen gegen Hasspostings vor“.",
      "url": "https://www.zeit.de/news/2026-02/04/getoeteter-polizist-ermittler-gehen-gegen-hasspostings-vor",
      "urlToImage": "https://img.zeit.de/news/2026-02/04/getoeteter-polizist-ermittler-gehen-gegen-hasspostings-vor-image-group/wide__1300x731",
      "publishedAt": "2026-02-04T08:25:47+00:00",
      "content": "Nach dem gewaltsamen Tod eines Polizisten in Völklingen vor rund sechs Monaten haben Ermittler mehr als 330 mutmaßlich strafbare Hasspostings im Internet registriert. Es handele sich um Beiträge, die… [+1660 chars]"
    },
    {
      "source": { "id": "rte", "name": "RTE" },
      "author": "RTÉ News",
      "title": "Irish bus driver 'didn't deserve' UK sacking - passenger",
      "description": "A passenger who had their necklace stolen on a London bus has said the Irish bus driver who retrieved it \"didn't deserve\" to be sacked.",
      "url": "https://www.rte.ie/news/uk/2026/0204/1556666-irish-bus-driver-london/",
      "urlToImage": "https://www.rte.ie/images/0023d821-1600.jpg",
      "publishedAt": "2026-02-04T08:25:36Z",
      "content": "A passenger who had their necklace stolen on a London bus has said the Irish bus driver who retrieved it \"didn't deserve\" to be sacked.\r\nMark Hehir, 62, who is originally from Limerick, was fired by … [+2983 chars]"
    }
  ] 

  constructor(){
    super();
    console.log("This is a constructor");
    this.state ={
      articles: this.articles,
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc1ee18d046a42569793bbb275a6cefe"
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
  }


  render() {
    return (
      <>    
        <div className="container my-4">
          <h1><center>AlleNews - An Entry Point to view latest News</center></h1><br/>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key = {element.url}>
            <NewsItem  title = {element.title ? element.title.slice(0,40): " "} description = {element.description ? element.description.slice(0,88): " "} imageurl = {element.urlToImage ? element.urlToImage : ""} newsurl={element.url}/>
            </div>
            })} 
            </div>
      </div>
      </>
    )
  }
}

export default News
