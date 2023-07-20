export type NotificationError = {
    message: string;
    context: string;
};

export default class Notification {

    private errors: NotificationError[] = [];

    addError(error: NotificationError) {
        this.errors.push(error);
    };

    messages(context?: string): string {     
          
        let message: string = "";
        this.errors.forEach(error => {
            if (error.context === context || context === undefined) {
                message += `${error.context}: ${error.message},`                
            }
        });             
        return message;
    };
}