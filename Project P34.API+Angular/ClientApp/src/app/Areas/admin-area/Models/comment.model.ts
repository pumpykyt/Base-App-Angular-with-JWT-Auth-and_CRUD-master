export class CommentModel{
    public text: string;
    public ArticleId: number;
    public userId: string;

    public constructor(){
        this.text = null;
        this.ArticleId = null;
        this.userId = null;
    }
}