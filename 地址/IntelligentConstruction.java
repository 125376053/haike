package com.zh.hellospring.beans.InternationnalManagement;

import java.util.Date;

/**
 * 国际化管理--智能化建设
 * @author yangshao516
 * intelligentconstruction
 */
public class IntelligentConstruction {
	private Integer id;
	private String selectTitle;//选择标题（选择框）1--智能应用，2--自主研发，3--聚焦发展，4--遇见未来
	private String content;//内容  建议使用编辑器
	private String title;
	private String imaPath;
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
	
	
	public String getSelectTitle() {
		return selectTitle;
	}
	public void setSelectTitle(String selectTitle) {
		this.selectTitle = selectTitle;
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
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImaPath() {
		return imaPath;
	}
	public void setImaPath(String imaPath) {
		this.imaPath = imaPath;
	}
    
    
}
