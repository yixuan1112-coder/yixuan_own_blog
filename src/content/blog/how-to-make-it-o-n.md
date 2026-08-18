---
title: How to make it O(n)?
description: leetcode164
type: knowledge
pubDate: Aug 18 2026
updatedDate: Aug 18 2026
---
如题：<https://leetcode.com/problems/maximum-gap/description/>

如果用先排序再依次遍历的方法就要nlogn，但是怎么样缩短到O（n)呢？

因为最近在学习java，所以我打算用Java来写。

（注：下面有些内容不一定是对的。）

1：首先是2001上面学的基数排序（利用couting sort来进行）

class Solution {

\    public int maximumGap(int\[] nums) {

\    if (nums == null || nums.length < 2) {

\    return 0;

\    }

\    int n = nums.length;

\    // 1. 基数排序 (Radix Sort) - 采用 256 进制 (8 bits 为一轮，共 4 轮)

\    int RADIX = 256;

\    int\[] aux = new int\[n]; // 辅助数组

\    // 32 位整数，每 8 bit 排序一次，共 4 次

\    for (int shift = 0; shift < 32; shift += 8) {

\    int\[] count = new int\[RADIX];

\    // 统计当前 Byte 的频次

\    for (int num : nums) {

\    int digit = (num >> shift) & 0xFF;

\    count\[digit]++;

\    }

\    // 计算前缀和，确定位置

\    for (int i = 1; i < RADIX; i++) {

\    count\[i] += count\[i - 1];

\    }

\    // 倒序回填，保证稳定排序

\    for (int i = n - 1; i >= 0; i--) {

\    int digit = (nums\[i] >> shift) & 0xFF;

\    aux\[--count[digit]] = nums\[i];

\    }

\    // 将排序结果拷贝回原数组

\    System.arraycopy(aux, 0, nums, 0, n);

\    }

\    // 2. 遍历排序后的数组，寻找最大差值

\    int maxGap = 0;

\    for (int i = 1; i < n; i++) {

\    maxGap = Math.max(maxGap, nums\[i] - nums\[i - 1]);

\    }

\    return maxGap;

\    }

}

*2：这个是桶排序的伪代码：*

*算法 maximumGap(数组 nums):*

 *   1. 边界条件判断:*

 *\    如果 nums 为空 或者 nums 的长度 < 2:*

 *\    返回 0*



 *   2. 初始化与寻找极值:*

 *\    初始化 minVal = nums\[0]*

 *\    初始化 maxVal = nums\[0]*

 *\    遍历 nums 中的每一个元素 num:*

 *\    minVal = 取 minVal 和 num 的较小值*

 *\    maxVal = 取 maxVal 和 num 的较大值*



 *\    如果 minVal 等于 maxVal:*

 *\    返回 0 (说明所有元素都相同，间距为 0)*



 *   3. 计算桶的参数:*

 *\    元素个数 n = nums 的长度*

 *\    计算桶容量 bucketSize = max(1, (maxVal - minVal) / (n - 1))  // 取平均间距（下取整）*

 *\    计算桶数量 bucketCount = (maxVal - minVal) / bucketSize + 1*



 *   4. 初始化桶存储结构:*

 *\    创建数组 bucketMin，长度为 bucketCount，初始值全设为 正无穷大*

 *\    创建数组 bucketMax，长度为 bucketCount，初始值全设为 负无穷大*



 *   5. 将元素分配到桶中（仅更新桶内最值）:*

 *\    遍历 nums 中的每一个元素 num:*

 *\    计算当前元素对应的桶索引 idx = (num - minVal) / bucketSize*

 *\    bucketMin\[idx] = 取 bucketMin\[idx] 和 num 的较小值*

 *\    bucketMax\[idx] = 取 bucketMax\[idx] 和 num 的较大值*



 *   6. 遍历所有非空桶，更新全局最大间距:*

 *\    初始化 maxGap = 0*

 *\    初始化 prevMax = minVal  // 记录上一个非空桶的最大值，初始设为全局最小值*



 *\    从 i = 0 到 bucketCount - 1 遍历每一个桶:*

 *\    如果 bucketMin\[i] 等于 正无穷大:*

 *\    跳过当前桶 (因为这是个空桶)*



 *\    // 计算当前非空桶的最小值与上一个非空桶的最大值之差*

 *\    currentGap = bucketMin\[i] - prevMax*

 *\    maxGap = 取 maxGap 和 currentGap 的较大值*



 *\    // 更新 prevMax 为当前桶的最大值*

 *\    prevMax = bucketMax\[i]*

 *   7. 返回 maxGap*
