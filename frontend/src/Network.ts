export class Network {
    public static shared: Network = new Network();
    private Network() {}

    public register(data: any): Promise<ResponseModel> {
        return this.sendRequest('/api/register', 'POST', JSON.stringify(data));
    }

    private async sendRequest(url: string, method: string, body: string | null): Promise<any> {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }
}

export class ResponseModel {
    public success: boolean;
    public message: string;

    constructor(success: boolean, message: string) {
        this.success = success;
        this.message = message;
    }
}