@T012 
Feature: T012 | New Chat

    Scenario: Validate New Chat
        Given   Login to Chat Gpt via user
        When    Click on New chat and enter text
        And     Rename chat from left panel
        Then    Delete chat from left panel
