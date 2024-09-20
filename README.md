# Performance Testing with k6

This project provides practical examples of different types of performance testing using JavaScript and [k6](https://k6.io/), an open-source load testing tool. The scripts included in this repository demonstrate how to perform load testing, stress testing, spike testing, soak testing, and scalability testing on web applications or APIs.

## Table of Contents

- [Project Overview](#project-overview)
- [Types of Performance Testing](#types-of-performance-testing)
  - [Load Testing](#load-testing)
  - [Stress Testing](#stress-testing)
  - [Spike Testing](#spike-testing)
  - [Soak Testing](#soak-testing)
  - [Scalability Testing](#scalability-testing)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This project aims to provide hands-on examples of various performance testing techniques using k6. The scripts are designed to simulate different load scenarios, helping you assess how your application performs under various conditions.

## Types of Performance Testing

### Load Testing

Load testing is designed to understand how your system behaves under a specific expected load. This involves simulating a typical number of users accessing the application simultaneously to ensure that it can handle everyday traffic smoothly. The goal is to identify any performance bottlenecks before they affect real users.

### Stress Testing

Stress testing pushes your system to its limits to understand its breaking point and how it fails under extreme conditions. This can help identify bottlenecks and performance issues that only appear when the system is under significant stress.

### Spike Testing

Spike testing evaluates how your system handles sudden, intense increases in load. This is crucial for understanding how your application responds to unexpected traffic spikes, such as during a flash sale or a breaking news event.

### Soak Testing

Soak testing involves running your system under a significant load for an extended period. This helps identify issues like memory leaks, resource leaks, and performance degradation over time that could affect the long-term reliability of your application.

### Scalability Testing

Scalability testing determines how well your system scales with increasing loads. It helps to understand whether your application can handle growth in user numbers or transaction volumes and at what point additional resources or optimizations might be needed.

## Installation

To run these performance tests, you need to have k6 installed on your system.

### Install via Homebrew (macOS)

```bash
brew install k6
```

### Install via Chocolatey (Windows)

`choco install k6 `

Alternatively, you can download k6 directly from the [official website]().

## Running the Tests

Each script in this repository is named according to the type of performance test it conducts. To execute a specific test, use the following command:

```
k6 run <script-name.js>

```
