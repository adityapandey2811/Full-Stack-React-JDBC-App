package com.hrc;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBconnection {
	public static Connection createConnect() {
		Connection con = null;
		final String URL="jdbc:mysql://localhost:3306/grey_goose?zeroDateTimeBehavior=convertToNull";
		final String USER="root";
		final String PASS="root";
		try {
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");//driver load 
			}
			catch (ClassNotFoundException e)
			{
				e.printStackTrace();
			}
			con = DriverManager.getConnection(URL, USER, PASS);
			
		}
		catch(SQLException e)
		{
			System.out.println("Error Occurred");
			e.printStackTrace();
		}
		return con;
		
	}	
}






