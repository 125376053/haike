package com.zh.hellospring.beans.home;

import java.util.Date;

/**
 * 之前Bander 更换了名字，另外增加了url字段
 不是首页 是公共的
 selectAddr 1 表示首页的
            2 人才招聘
            3 社会招聘
            4 海科学院 表示 海科学院的banner
  新建有一个筛选表示建立谁
  打开页面也有筛选表示 查询哪一个
 *
 */
public class BannerShow {
	private Integer id;
	private String url;//连接
	private String selectAddr;//选择显示位置  1--首页  2--人才招聘  3--社会招聘 4--海科学院
	private String title;//标题
	private String content;//内容
	public String imgPath;//上传路径
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
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
	public String getSelectAddr() {
		return selectAddr;
	}
	public void setSelectAddr(String selectAddr) {
		this.selectAddr = selectAddr;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
    
    
}
