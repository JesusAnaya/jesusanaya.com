"""
"""

from django.test import TestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

class SimpleTest(TestCase):
    def setUp(self):
        self.driver = webdriver.Firefox()

    def test_home(self):
        """
        """
        self.driver.get("http://127.0.0.1:9000/")
        self.driver.find_element_by_class_name("home").click()
        time.sleep(2)

        self.assertIn("Web development with python and more", self.driver.title)

        self.driver.find_element_by_class_name("resume").click()
        time.sleep(2)

        self.assertIn("Jesus Anaya Skills", self.driver.title)

    def tearDown(self):
        self.driver.close()