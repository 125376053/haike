package com.zh.hellospring.beans.talent.model;

import java.util.Date;

/**
 * 我们的足迹
 * @author yangshao516
 *
 */
public class Footprint {
	private Integer id;
	private String imgPath;//图片路径
	private String content;//内容
	private String title;//标题
	private String titleEN;//标题
	
	private Date time;//创建时间
	private Date editTime;//修改时间
	private int live;//0--展示，1--冻结；
	private String comment;//备注
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getImgPath() {
		return imgPath;
	}
	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public Date getEditTime() {
		return editTime;
	}
	public void setEditTime(Date editTime) {
		this.editTime = editTime;
	}
	public int getLive() {
		return live;
	}
	public void setLive(int live) {
		this.live = live;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getTitleEN() {
		return titleEN;
	}
	public void setTitleEN(String titleEN) {
		this.titleEN = titleEN;
	}
	
	
	
}
