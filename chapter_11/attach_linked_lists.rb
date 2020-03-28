# Write a method that attaches two linked lists together.

class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node

  def initialize(first_node = nil)
    @first_node = first_node
  end

  # attaching two linked lists method
  def attach_list(second_list)
    current_node = @first_node
    current_node = current_node.next_node while current_node.next_node
    current_node.next_node = second_list.first_node
  end

end