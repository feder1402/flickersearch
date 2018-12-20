# How to Design an UI Application using Statecharts or 'Thinking in React with Statecharts'

## Overview
Thinking in React provides a set of steps to design a React application based on the static structure of its visual components.

This works well for static applications or simple interactions but for many scenarios where users can interact with the UI in multiple and unescripted ways, or where the interaction with the backing services is complex and non-linear, the static approach doesn't provide enough guidance. 

Designing with statecharts focuses first on the dynamic, or behavioral changes of the application.

## Steps:
1. Identify the states and transitions (Places where the application behavior changes)
    1. Identify the main screens and their transitions
    1. For each screen, identify any subwindow (dialog, mopdal, etc)
    1. For each subwindow, identify their states and transitions 
1. Identify the different UI renditions
1. Identify the actions triggered by each state and transition

