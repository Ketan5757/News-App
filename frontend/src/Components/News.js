import React, { Component } from 'react'
import NewsItem from './NewsItem'


export class News extends Component {
  constructor(){
    super();
    console.log("This is a constructor");
  }
  render() {
    return (
      <>    
        <div className="container my-4">
          <h1><center>AlleNews - An Entry Point to view latest News</center></h1><br/>
          <div className="row">
            <div className="col-md-4">
            <NewsItem title = "News 1" description = "description1" imageurl ="https://images.bild.de/6982ea58e2529c3c38c298ca/3c72057c7a3b05b9c6b2fb619d2736f0,cc1f8317?w=1280" newsurl="https://www.bild.de/politik/ausland-und-internationales/bnd-wladimir-putin-luegt-ueber-die-wahren-kosten-des-krieges-6982ea58e2529c3c38c298ca"/>
            </div>
            <div className="col-md-4">
            <NewsItem title = "News 2" description = "description2" imageurl ="https://img.zeit.de/news/2026-02/04/47-jaehrige-angezuendet-revision-nach-urteil-eingelegt-image-group/wide__1300x731" newsurl= "https://www.zeit.de/news/2026-02/04/47-jaehrige-angezuendet-revision-nach-urteil-eingelegt"/>
            </div>
            <div className="col-md-4">
            <NewsItem title = "News 3" description = "description3" imageurl ="https://images.bild.de/6980d74ff0e62064809e2741/d702e95cc26aa491f536622e496d62e9,983b0e6b?w=1280" newsurl="https://www.bild.de/sport/olympia/olympia-2026-ioc-verbietet-deutscher-eisschnelllaeuferin-die-schuhe-6980d74ff0e62064809e2741"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 4" description = "description4" imageurl = "https://img.zeit.de/news/2026-02/04/falsche-bankmitarbeiter-bringen-mann-um-10-000-euro-image-group/wide__1300x731" newsurl="https://www.zeit.de/news/2026-02/04/falsche-bankmitarbeiter-bringen-mann-um-10-000-euro"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 5" description = "description5" imageurl = "https://images.bild.de/69822f6cf0e62064809e3a73/926f0e2fdfad812e60cfe9aecb702a4a,ddb59e61?w=1280" newsurl="https://www.bild.de/regional/berlin/am-limit-die-feuerwehr-musste-im-januar-jede-minute-ausruecken-69822f6cf0e62064809e3a73"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 6" description = "description6" imageurl = "https://cdn.businessinsider.de/wp-content/uploads/2026/02/12C73-2-scaled.jpg?ver=1770130917" newsurl = "https://www.businessinsider.de/gruenderszene/an-diesem-tag-startet-die-neue-staffel-die-hoehle-der-loewen/"/>
            </div>
          </div>
      </div>
      </>
    )
  }
}

export default News
