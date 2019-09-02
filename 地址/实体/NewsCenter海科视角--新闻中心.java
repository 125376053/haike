package com.zh.hellospring.beans.haikePerspective;

import java.util.Date;

/**
 * 海科视角--新闻中心
 * @author yangshao516
 *
 */
public class NewsCenter {
	private Integer id;
	private String title;//标题
	private String introduction;//简介
	private String imgPath;//缩略图图片链接
	private String content;//内容  建议使用编辑器
	private String selectOtherShow;//选择 0 其它地方显示  1--学院新闻  2--人才招聘-雇主品牌，3--关于海科-社会责任
    private Date time;//创建时间（后台自动添加）
    private int live;//0--展示，1--冻结
    private Date editTime;//编辑时间（后台自动添加）
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
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
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
	public String getSelectOtherShow() {
		return selectOtherShow;
	}
	public void setSelectOtherShow(String selectOtherShow) {
		this.selectOtherShow = selectOtherShow;
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
