package com.zh.hellospring.beans.onHaike;

import java.util.Date;

/**
 * 关于海科--荣誉奖项
 * @author yangshao516
 *
 */
public class honor {
	private Integer id;
	private String title;//标题
	private String imgPath;//图片路径
    private Date time;//创建时间
    private int live;//0--展示，1--冻结
    private Date editTime;//编辑时间
    private String comment;//备注
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public int getLive() {
		return live;
	}
	public void setLive(int live) {
		this.live = live;
	}
	public Date getEditTime() {
		return editTime;
	}
	public void setEditTime(Date editTime) {
		this.editTime = editTime;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
    
    
}
