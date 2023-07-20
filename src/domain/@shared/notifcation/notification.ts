export type NotificationErrorProps = {
    message: string;
    context: string;
};

export default class Notification {

    private errors: NotificationErrorProps[] = [];

    addError(error: NotificationErrorProps) {
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

    hasErrors(): boolean {
        if (this.errors.length > 0) {
            return true;
        };
        return false;
    };

    getErrors(): NotificationErrorProps[] {
        return this.errors
    }
}