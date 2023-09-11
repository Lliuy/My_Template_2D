import PriorityQueue, { PriorityElement } from "./PriorityQueue";
import PriorityStack from "./PriorityStack";
import { EPriority, IFormData } from "./UIDefine";
import UIManager from "./UIManager";
class WindowMgr {
	/**  正在显示的窗体（栈）  */
	private _showingList: PriorityStack<string> = new PriorityStack();
	// 相同窗口
	private _sameList: PriorityQueue<WindowData> = new PriorityQueue();
	/**  队列 */
	private _waitingList: PriorityQueue<WindowData> = new PriorityQueue();

	private _currWindow: string = "";
	public get currWindow () {
		return this._currWindow;
	}

	public getWindows () {
		return this._showingList.getElements();
	}

	/** 打开窗体 */
	public async open (prefabPath: string, params?: any, formData?: IFormData) {
		formData = this._formatFormData(formData);
		if (this._showingList.size <= 0 || (!formData.showWait && formData.priority >= this._showingList.getTopEPriority()) && !this._showingList.hasElement(prefabPath)) {
			this._showingList.push(prefabPath, formData.priority);
			this._currWindow = this._showingList.getTopElement();
			let ret = await UIManager.getInstance().openForm(prefabPath, params, formData);
			if (!ret) {
				this._showingList.remove(prefabPath);
			}
			return ret;
		}

		if (this._showingList.hasElement(prefabPath)) {
			this._sameList.enqueue({ prefabPath: prefabPath, params: params, formData: formData });
			console.log(`${prefabPath} 由于和正在显示的弹窗相同放入等待队列等该弹窗关闭后出现`, this._sameList, this._sameList.size);
		} else {
			// 入等待队列
			this._waitingList.enqueue({ prefabPath: prefabPath, params: params, formData: formData });
			console.log(`${prefabPath} 已经加入等待队列`, this._waitingList, this._waitingList.size);
		}

		// 加载窗体
		return await UIManager.getInstance().loadUIForm(prefabPath);
	}

	public async close (prefabPath: string) {
		let result = this._showingList.remove(prefabPath);
		if (!result) return false;

		await UIManager.getInstance().closeForm(prefabPath);

		if (this._sameList.size > 0) {
			let windowData = this._sameList.dequeue();
			this.open(windowData.prefabPath, windowData.params, windowData.formData);
			return true;
		}

		if (this._showingList.size <= 0 && this._waitingList.size > 0) {
			let windowData = this._waitingList.dequeue();
			this.open(windowData.prefabPath, windowData.params, windowData.formData);
		}

		return true;
	}

	/** 关闭所有弹窗 */
	public async closeAll () {
		this._waitingList.clear();

		for (const fid of this._showingList.getElements()) {
			await UIManager.getInstance().closeForm(fid);
		}
		this._showingList.clear();
		return true;
	}

	private _formatFormData (formData: any) {
		return Object.assign({ showWait: false, priority: EPriority.ZERO }, formData);
	}
}

// 单独管理
class WindowData {
	prefabPath: string;
	params?: any;
	formData?: any;
}

export default new WindowMgr();
