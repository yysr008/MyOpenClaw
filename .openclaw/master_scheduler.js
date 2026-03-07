// master_scheduler.js
const { spawn } = require('child_process');
const path = require('path');
const now = new Date();
const utcMinutes = now.getUTCMinutes();
const utcHours = now.getUTCHours();

// 是否是财经汇报时间（每6小时对应 UTC 时间 0,6,12,18 点）
function isFinanceTime() {
  return [0, 6, 12, 18].includes(utcHours) && utcMinutes === 0;
}

// 是否是需要每小时整点或半点执行的任务（东八区时间）
function isHourlyTaskTime() {
  // 将 UTC 时间转换为东八区时间（UTC+8）
  const cet8Hours = (utcHours + 8) % 24;
  const isOnHourOrHalf = utcMinutes === 0 || utcMinutes === 30;
  return isOnHourOrHalf;
}

function runScript(scriptPath) {
  return new Promise((resolve, reject) => {
    const proc = spawn('node', [scriptPath], { stdio: 'inherit' });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${scriptPath} exited with ${code}`));
    });
    proc.on('error', reject);
  });
}

async function main() {
  try {
    if (isHourlyTaskTime()) {
      console.log(`[${now.toISOString()}] 执行天气汇报和请安任务...`);
      await runScript(path.join(__dirname, 'weather_report.js'));
      await runScript(path.join(__dirname, 'checkin.js'));
    }
    if (isFinanceTime()) {
      console.log(`[${now.toISOString()}] 执行财经汇报任务...`);
      await runScript(path.join(__dirname, 'financial_report.js'));
    }
  } catch (error) {
    console.error('任务执行失败:', error);
    process.exit(1);
  }
}

main();
