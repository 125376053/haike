package com.zh.hellospring.beans.haikePerspective;

import java.util.Date;

/**
 * 海科视角--多媒体--出版物
 * @author yangshao516
 *
 */
public class Publication {
	private Integer id;
	private String title;//标题（保留，无发现显示地方）
	private String content;//内容  建议使用编辑器
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
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
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
