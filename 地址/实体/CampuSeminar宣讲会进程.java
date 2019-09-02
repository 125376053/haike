package com.zh.hellospring.beans.talent.model;

import java.util.Date;

/**
 * 校园招聘--宣讲会行程
 * @author yangshao516
 *
 */
public class CampuSeminar {
	public Integer id;
    public String content;//内容
    public String imgPath;//上传路径
    public String title;//标题
    private Date time;//创建时间
    private int live;//0--展示，1--冻结
    private Date editTime;//编辑时间
    
    private String campus;//校区
    private String address;//地址
    private String preachTime;//宣讲时间 
    private String preachDate;//宣讲日期
    
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public String getCampus() {
		return campus;
	}
	public void setCampus(String campus) {
		this.campus = campus;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPreachTime() {
		return preachTime;
	}
	public void setPreachTime(String preachTime) {
		this.preachTime = preachTime;
	}
	public String getPreachDate() {
		return preachDate;
	}
	public void setPreachDate(String preachDate) {
		this.preachDate = preachDate;
	}
    
    
    
}
