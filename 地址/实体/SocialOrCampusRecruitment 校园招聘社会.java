package com.zh.hellospring.beans.talent.model;

import java.util.Date;

/**
 * 社会招聘/校园招聘
 * @author yangshao516
 *
 */
public class SocialOrCampusRecruitment {
	private Integer id;
	type 1 社会招聘 2 学校招聘
	private String peopleNum;//招聘人数
	private String mouthSalary;//月薪
	private String yearSalary;//年薪
	private String education;//学历
	private String workExperience;//工作经验
	private String content;//内容
	private String title;//标题
	private String address;//工作地点
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
	public String getPeopleNum() {
		return peopleNum;
	}
	public void setPeopleNum(String peopleNum) {
		this.peopleNum = peopleNum;
	}
	
	public String getMouthSalary() {
		return mouthSalary;
	}
	public void setMouthSalary(String mouthSalary) {
		this.mouthSalary = mouthSalary;
	}
	public String getYearSalary() {
		return yearSalary;
	}
	public void setYearSalary(String yearSalary) {
		this.yearSalary = yearSalary;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getWorkExperience() {
		return workExperience;
	}
	public void setWorkExperience(String workExperience) {
		this.workExperience = workExperience;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	
	
	
}