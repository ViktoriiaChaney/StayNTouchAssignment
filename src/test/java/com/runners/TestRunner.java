package com.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/com/Features/"
                 ,glue = "com/stepDefinitions"
                 ,dryRun = false
                 ,monochrome = true
		         ,tags = "@smoke"
		         ,strict = true
		         ,plugin = { "pretty", 
				           "html:target/cucumber-default-reports", 
				           "rerun:target/FailedTests.txt", 
				           "json:target/cucumber.json" })
public class TestRunner {

}
