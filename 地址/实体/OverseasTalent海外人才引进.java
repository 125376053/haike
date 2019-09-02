package com.zh.hellospring.beans.talent.model;

import java.util.Date;

/**
 * 海外人才引进
 *
 */
public class OverseasTalent {
	private Integer id;
	private String title;//标题
	private String titleEN;//标题
	private String address;//地址
	private String addressEN;//地址
	private String jobRequirements;//应聘要求
	private String jobRequirementsEN;//应聘要求
	private String salaryEN;//薪资待遇
	private String salary;//薪资待遇
	private Date time;//添加
	private Date editTime;//编辑时间
	private String comment;//备注
	private int live;
	
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getJobRequirements() {
		return jobRequirements;
	}
	public void setJobRequirements(String jobRequirements) {
		this.jobRequirements = jobRequirements;
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
	public String getAddressEN() {
		return addressEN;
	}
	public void setAddressEN(String addressEN) {
		this.addressEN = addressEN;
	}
	public String getJobRequirementsEN() {
		return jobRequirementsEN;
	}
	public void setJobRequirementsEN(String jobRequirementsEN) {
		this.jobRequirementsEN = jobRequirementsEN;
	}
	
	
	public String getSalaryEN() {
		return salaryEN;
	}
	public void setSalaryEN(String salaryEN) {
		this.salaryEN = salaryEN;
	}
	public String getSalary() {
		return salary;
	}
	public void setSalary(String salary) {
		this.salary = salary;
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
	
	
	
}
