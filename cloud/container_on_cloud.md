# Running a Docker Container on a Google Cloud VM

This guide explains how to set up a Google Compute Engine (GCE) Virtual Machine (VM) and run a Docker container on it.

---

## **1. Set Up the Google Compute Engine VM**

### **Step 1: Create a VM Instance**
1. Log in to the [Google Cloud Console](https://console.cloud.google.com/).
2. Navigate to **Compute Engine** > **VM Instances**.
3. Click **Create Instance** and configure:
   - **Name:** Choose a descriptive name for your VM.
   - **Region and Zone:** Select a region close to your users.
   - **Machine Configuration:** Select a machine type, e.g., `e2-micro` (for small workloads).
   - **Boot Disk:** Choose an image like **Ubuntu 22.04 LTS** or **Debian**.
   - **Firewall:** Enable HTTP/HTTPS traffic if needed.
4. Click **Create** to launch the instance.

---

## **2. Connect to the VM**
1. Once the VM is created, go to the **VM Instances** page in the console.
2. Click **SSH** to connect to the instance.

---

## **3. Install Docker**

### **Step 1: Update the Package List**
```bash
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
docker --version
docker pull nginx
docker run -d -p 80:80 --name nginx-container nginx
docker ps
docker run -d -p 80:80 -v /host/path:/container/path --name container-name image-name
sudo apt-get install docker-compose
docker-compose up -d

