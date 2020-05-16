export class CommentModel{
    public Id: string;
    public text: string;
    public ArticleId: number;
    public userId: string;

    public constructor(){
        this.Id = null;
        this.text = null;
        this.ArticleId = null;
        this.userId = null;
    }
}