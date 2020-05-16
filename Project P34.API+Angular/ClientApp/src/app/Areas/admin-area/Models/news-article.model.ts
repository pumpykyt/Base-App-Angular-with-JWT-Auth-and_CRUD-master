export class NewsArticle{
    public Id: number;
    public title: string;
    public imageUrl: string;
    public articleText: string;

    public constructor(){
        this.Id = null;
        this.title = null;
        this.imageUrl = null;
        this.articleText = null;
    }
}