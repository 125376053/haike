
package com.zh.hellospring.beans.video;

import java.util.Date;

/** 海科相关视频
 * @author yangshao
 * @version date：2019年8月31日 下午1:50:02
 * haikevideo
 */
public class HaikeVideo {
	private Integer id;
	private String selectOtherShow;//选择
	1-首页；
	2--海科视角-新闻媒体-宣传片----------已经单独做了一个页面了
	3--人才招聘-海外人才招进  --------------banner上的
	4--人才招聘-校园招聘 --------------banner上的
	private String title;//标题
	public String videoPath;//视频路径
    public Date time;//创建时间
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
	public String getVideoPath() {
		return videoPath;
	}
	public void setVideoPath(String videoPath) {
		this.videoPath = videoPath;
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
	public String getSelectOtherShow() {
		return selectOtherShow;
	}
	public void setSelectOtherShow(String selectOtherShow) {
		this.selectOtherShow = selectOtherShow;
	}
    
    
}
