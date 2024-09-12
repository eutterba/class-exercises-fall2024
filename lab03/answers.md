# Lab 3 Answers

## Part 1: Git

### 1.1. List the contents of the lab03-exercises repo immediately after initialization
```
# paste code here
 lab03 git:(my_lab3_work) cd lab03-exercises
➜  lab03-exercises git:(my_lab3_work) ls

```

### 1.2. Paste the output of your `git status` command
```
# paste code here

➜  lab03-exercises git:(master) ✗ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

```

### 1.3. Paste the output of the state of your repository after committing your README.md file
```
# paste code here

➜  lab03-exercises git:(master) ✗ git commit -m "add README.md to the repository"
[master (root-commit) 4827eac] add README.md to the repository
 Committer: eutterba <eutterba@DESKTOP-5VCIKN6>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 1 file changed, 1 insertion(+)
 create mode 100644 README.md

```

### 1.4. Copy your `git log` output
```
# paste code here

commit 4827eac074a83bf61d467ed6e9ef9794b98ccdbd (HEAD -> master)
Author: eutterba <eutterba@DESKTOP-5VCIKN6>
Date:   Thu Sep 5 11:05:26 2024 -0400

    add README.md to the repository

```

### 1.5. Copy your `git diff` output
```
# paste code here

diff --git a/README.md b/README.md
index 0c6ef36..33bb3e7 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,23 @@
-# my lab3
\ No newline at end of file
+# my lab3
+
+import java.util.ArrayList;
+import java.util.Arrays;
+import java.util.List;
+
+public static List<Integer> findModeNestedLoops(List<Integer> l){
+    int size=l.size();
+    int count=0;
+    int current=1;
+    List<Integer> duplist = new ArrayList<>();
+    while (count<size-1){
+        while (current<size){
+            if(l.get(count)==l.get(current) && (duplist.contains(l.get(count))==false)) {
+                duplist.add(l.get(count));
+                break;
+            }
+            current++;
+        }
+        count++;
+        current=count-1;
+    }
+    return duplist;
+   }

```


### 1.6. Reflection

We've learned 6 git subcommands now. Describe each of them in your own words in the section below:

* git init used to make a new git repo
* git status tells you what files need to be commited 
* git add used to add a file into the tracked files or the files ready to commit
* git commit makes a commit of the files on your local repo so its ready to be pushed into the remote repo
* git log shows history of the git
* git diff shows the changes made in the git


### 1.7. Practice: Find All Duplicates (Java)
Make sure you implement the `FindDuplicates.java` class as specified in the instructions (with the nested loops implementation).

## Part 2: GitHub

### 2.1. Practice: Find All Duplicates (Python)
Make sure you implement the `find_duplicates.py` file as specified in the instructions (with the nested loops implementation).
done


## Part 3: Branching

### 3.1. Implement the More Efficient Version of the "Find Duplicates" problem
Implement the more efficient Version of the "Find Duplicates" problem using a dictionary (or hashmap) data structure instead of nested loops. You may do this in either your Python file or in the Java file that you’ve already made. Do this by adding a second function/method to your Java/Python file with a slightly different name.
done


### 3.2. Link to Repo
Please make sure that the new repo that you made today on GitHub is public, and paste a link to it below.

```bash
# paste your new repo link here...
https://github.com/eutterba/lab03-exercises 
```

### 3.3. What do the three "Merge pull request" options mean? 
Describe each of them in your own words.

create a merge commit-merges the branches together keeping the history of the different branches
squash and merge- makes multiple commits look like it was just 1 thing in history
rebase and merge- makes the branches look like they came after each other