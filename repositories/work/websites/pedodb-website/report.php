<?php

//Block 1
$user = "user"; //Enter the user name
$password = "password"; //Enter the password
$host = "host"; //Enter the host
$dbase = "database"; //Enter the database
$table = "table"; //Enter the table name

//Block 2
$Name= $_POST['Name_entered'];
$Region= $_POST['Region_entered'];
$City= $_POST['City_entered'];
$Country= $_POST['Country_entered'];
$IPAddress= $_POST['IPAddress_entered'];
$StreetAddress= $_POST['StreetAddress_entered'];
$Age= $_POST['Age_entered'];
$PhoneNumber= $_POST['PhoneNumber_entered'];

//Block 3
$connection= mysql_connect ($host, $user, $password);
if (!$connection)
{
die ('Could not connect:' . mysql_error());
}
mysql_select_db($database, $connection);


//Block 4
$username_table= mysql_query( "SELECT username FROM $table WHERE username= '$username'" )
or die("SELECT Error: ".mysql_error());


//Block 5
mysql_query("INSERT INTO $table (column1, column2, column3, column4, column5, column6, column7, column8)
VALUES (value1, value2, value 3)");

//Block 6
echo 'Your report has been submitted.';

//Block 7
mysql_close($connection);

?>
