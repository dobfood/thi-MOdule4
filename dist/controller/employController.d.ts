declare class employController {
    static show(req: any, res: any): Promise<any>;
    static getAdd(req: any, res: any): Promise<void>;
    static postAdd(req: any, res: any): Promise<void>;
    static delete(req: any, res: any): Promise<void>;
    static getUpdate(req: any, res: any): Promise<any>;
    static postUpdate(req: any, res: any): Promise<any>;
    static Detail(req: any, res: any): Promise<void>;
}
export default employController;
