using StuffCaseApi.Models;
using System.Collections.Generic;
using Microsoft.Data;
using Microsoft.Data.Sqlite;

namespace StuffCaseApi.Data
{
    public class StuffData
    {

        public static List<StuffItem> GetStuff(){
            List<StuffItem> listStuff = new List<StuffItem>();
            using (SqliteConnection c = new SqliteConnection(DataBase.dbConnectionString))
            {
                using(SqliteCommand sqlCommand = c.CreateCommand())   
                {  
                        sqlCommand.CommandText = "SELECT id,name,category,date,author from stuff;";  
                        sqlCommand.Connection.Open();
                        var result = sqlCommand.ExecuteReader();  
                        while (result.Read())  
                        {  
                            StuffItem stuff = new StuffItem(){
                                Id = result.GetInt32(0),
                                Name = result.GetString(1),
                                Category = result.GetString(2),
                                Date = result.GetString(3),
                                Author = result.GetString(4)
                            };
                            listStuff.Add(stuff);
                        }  
                        result.Close();
                }  
            }

            return listStuff;
        }

        public static StuffItem GetStuff(int id){
            StuffItem stuff = new StuffItem();
            using (SqliteConnection c = new SqliteConnection(DataBase.dbConnectionString))
            {
                using(SqliteCommand sqlCommand = c.CreateCommand())   
                {  
                        sqlCommand.CommandText = "SELECT id,name,category,date,author from stuff where id = "+ id +";";  
                        sqlCommand.Connection.Open();
                        var result = sqlCommand.ExecuteReader();  
                        if (result.Read())  
                        {  
                            stuff = new StuffItem(){
                                Id = result.GetInt32(0),
                                Name = result.GetString(1),
                                Category = result.GetString(2),
                                Date = result.GetString(3),
                                Author = result.GetString(4)
                            };
                        }  
                        result.Close();
                }  
            }

            return stuff;
        }

        public static void UpdateStuff(int id, StuffItem stuff){
            using (SqliteConnection c = new SqliteConnection(DataBase.dbConnectionString))
            {
                using(SqliteCommand sqlCommand = c.CreateCommand())   
                        {  
                                sqlCommand.CommandText = "UPDATE stuff set" +
                                                        " name = '"+ stuff.Name+"',"+
                                                        " category = '"+ stuff.Category+"',"+
                                                        " date = '"+ stuff.Date+"',"+
                                                        " author = '"+ stuff.Author+"' where id = '"+ id +"';";  
                                sqlCommand.Connection.Open();
                                var result = sqlCommand.ExecuteReader();  
                                result.Close();
                        }  
            }
        }

        public static void CreateStuff(StuffItem stuff)
        {
            using (SqliteConnection c = new SqliteConnection(DataBase.dbConnectionString))
            {
                using(SqliteCommand sqlCommand = c.CreateCommand())   
                        {  
                                sqlCommand.CommandText = "INSERT INTO stuff (name, category, date, author) VALUES ('"+stuff.Name +"', '"+stuff.Category +"', '"+stuff.Date +"', '"+stuff.Author +"');";
                                sqlCommand.Connection.Open();
                                var result = sqlCommand.ExecuteReader();  
                                result.Close();
                        }  
            }
        }

        public static int GetMaxId()
        {
           using (SqliteConnection c = new SqliteConnection(DataBase.dbConnectionString))
            {
                using(SqliteCommand sqlCommand = c.CreateCommand())   
                {  
                    int i = -1;
                    sqlCommand.CommandText = "SELECT MAX(id) FROM stuff;";
                    sqlCommand.Connection.Open();
                    var result = sqlCommand.ExecuteReader(); 
                    if (result.Read())  
                    {  
                         i = System.Convert.ToInt32(result.GetValue(0));
                    }  
                    
                    result.Close();
                    return i;
                }  
            } 
        }
    }
}